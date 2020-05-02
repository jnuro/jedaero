import { trustyFetch } from "../fetch";
import { dateToString } from "@sqd-ffrog/tools";
import iconv from "iconv-lite";
import { Buffer } from "buffer";

// TODO: d.ts를 만들어주기
const cheerio = require("react-native-cheerio");

export interface BranchVolumeDetailType {
  /**
   * 해당 도서가
   */
  absentBookReport: boolean;
  /**
   * TODO: 뭐하는놈인지 찾기.
   */
  availableServices: null;
  /**
   * 해당 도서의 등록번호
   */
  barcode: string;

  /**
   * 해당 도서의 소장 위치
   */
  branch: {
    /**
     * 소장 위치의 id값
     * ex) 중앙도서관의 경우 1
     */
    id: number;
    /**
     * 소장 위치 장소명
     * ex) 중앙도서관, 교육대학분관
     */
    name: string;
    /**
     * 소장 위치의 장소 별칭
     */
    alias: string;
    /**
     * 해당 도서관에 대한 코드번호
     */
    libraryCode: string;
  };

  /**
   * 해당 도서의 청구 기호.
   */
  callNo: string;

  /**
   * 해당 도서의 상태.
   */
  circulationState: {
    /**
     * 상태 아이디
     */
    id: number;

    /**
     * 상태 코드
     * READY, ON_SHELF 등의 문자열 형태로 표시된다.
     */
    code: string;

    /**
     * 상태명
     */
    name: string;

    /**
     * 대출 중인지
     */
    isCharged?: boolean;
  };

  /**
   * 해당 도서를 기부한 사람.
   * 기부한 도서가 아닐 시 null.
   */
  donator: string | null;

  /**
   * 대출 중이 아니면 null.
   * 대출 중이라면 연체애 대한 내용이 yyyy-MM-dd hh:mm:ss 의 형태로 나온다.
   */
  dueDate: string | null;

  /**
   * TODO: 뭐하는놈인지 찾기.
   */
  holdCount: number;

  /**
   * id
   */
  id: number;

  /**
   * 도서자료의 위치
   */
  location: {
    /**
     * TODO: 뭐하는 놈인지 찾기
     */
    attachment: any[];
    id: number;

    /**
     * 강의용 서재인지
     */
    isAssignedLecture: boolean;

    /**
     * 현재 예약중인 도서인지
     */
    isPreserved: boolean;
  }[];

  preservationNo: null;

  shelf: null;

  supplements: null;

  useReadService: null;
}

interface BiblioType {
  id: number;
  name: string;
  imageMapOffset: number;
}

interface BranchVolumesType {
  cState: string;
  hasItem: boolean;
  id: number;
  isCr: boolean;
  isSubscribed: boolean;
  name: string;
  volume: string;
}

interface SimilarBookType {
  /**
   * 책의 아이디
   * {@link Book.id}
   */
  id: number;

  /**
   * 책의 제목.
   * {@link Book.titleStatement}
   */
  titleStatement: string;

  /**
   * 책의 출판사
   * {@link Book.publication}
   */
  publication: string;
}

interface Book {
  /**
   * 책 저자
   */
  author: string;

  /**
   * 책 타입.
   */
  biblioType: BiblioType;

  /**
   * 책 위치
   */
  branchVolumes: BranchVolumesType[];

  /**
   * 페이지 쪽수, 책의 높이 (도서관에 꽂았을때 진짜 높이), 저자에 대한 설명이
   * stingified Json 형태로 나온 결과.
   */
  etcContent: string;

  /**
   * 책의 id.
   */
  id: number;

  /**
   * 책의 isbn
   */
  isbn: string;

  /**
   * 책의 issn
   */
  issn: string | null;

  // TODO: 뭐하는 놈인지 찾기.
  locationId: number | null;

  // TODO : 뭐하는 놈인지 찾기.
  newResources: string | null;

  /**
   * 책의 출판사, 출판사 위치, 연도에 대한 문자열
   * 예시 : "파주 : 이봄, 2016"
   */
  publication: string;

  resources: any[] | null;

  /**
   * 유사한 책의 타입
   */
  similars: SimilarBookType[];

  /**
   * 섬네일 url.
   *
   */
  thumbnailUrl: string | null;

  /**
   * 책의 제목.
   */
  titleStatement: string;
}

/**
 * Book의 정보중 일부만을 발췌하는 타입
 */
export interface BookIntroductionDetail {
  titleStatement: string;
  author: string;
  publication: string;
  isbn: string;
  issn: string | null;
  bibliotype: BiblioType;
  materialType: {
    id: number;
    code: string;
    name: string;
    myParent: string | null;
  };
  content: null;
  isMarc: null;
  thumbnail: null;
}

export interface BookIntroductionRow {
  content: any[];
  label: string;
  separator: string;
}

export interface BooksApiResponse {
  isFuzzy: boolean;
  totalCount: number;
  offset: number;
  max: number;
  abc: string | null;
  list: Book[];
}

interface BooksApiWrapper {
  success: boolean;
  code?: string;
  message: string;
  data?: BooksApiResponse;
}

/**
 * 현재 도서의 소장 상태를 알려주는 api.
 *
 * @param id
 */
export async function getBookStateById(id: number) {
  const uri = `https://lib.jejunu.ac.kr/pyxis-api/1/biblios/${id}/items`;
  
  try {
    const res = await trustyFetch("GET", uri);
    if(res.info().status !== 200) {
      throw new Error(
        `Couldn't connect to getBookStateById(). status: ${res.info().status}`
      );
    }
  } catch (err) {
    console.warn(err);
  }
}

interface BookDetail {
  totalCount: number;
  list: any[];
}

/**
 * id를 통해 검색한 책의 정보.
 *
 * @param id Book의 id
 * @return 북에 해당하는 정보.
 */
export async function getBookById(id: number): Promise<BookDetail> {
  const EMPTY_BOOKS: BookDetail = {
    totalCount: 0,
    list: []
  };

  const uri = `https://lib.jejunu.ac.kr/pyxis-api/1/biblios/${id}`;

  try {
    const res = await trustyFetch("GET", uri);
    if (res.info().status !== 200) {
      throw new Error(
        `Couldn't connect to getBooksById(). status: ${res.info().status}`
      );
    }

    const json: BooksApiWrapper = res.json();
    if (!json.success) {
      throw new Error(`getBookById failed. status: ${res.info().status}`);
    }

    return json.data!!;
  } catch (err) {
    console.warn(err);
    return EMPTY_BOOKS;
  }
}

/**
 * 검색한 키워드의 결과를 반환함.
 *
 * @param keyword 검색 키워드
 * @param page 검색 페이지
 * @param size 페이지당 행 수
 */
export async function getCollectedBooksByKeyword(
  keyword: string,
  page: number,
  size: number = 20
): Promise<BooksApiResponse> {
  const EMPTY_NEWBOOKS: BooksApiResponse = {
    isFuzzy: false,
    totalCount: 0,
    offset: 0,
    max: 0,
    abc: null,
    list: []
  };

  const uri = `https://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=k%7Ca%7C${encodeURIComponent(
    keyword
  )}&max=${size}&offset=${size * (page - 1)}`;

  try {
    const res = await trustyFetch("GET", uri);
    if (res.info().status !== 200) {
      throw new Error(
        `Couldn't connect to getCollectedBooksApi(). status: ${
          res.info().status
        }`
      );
    }
    const json: BooksApiWrapper = res.json();
    if (!json.success) {
      throw new Error("getCollectedBooks result failed");
    }
    return json?.data ?? EMPTY_NEWBOOKS;
  } catch (err) {
    console.warn(err);
    return EMPTY_NEWBOOKS;
  }
}

/**
 * 조회한 isbn에 따라 썸네일을 불러옴
 *
 * @param isbn
 */
export async function getThumbnailUriByIsbn(isbn: string): Promise<string> {
  // TODO: 현재 원인 불명으로 썸네일 작동 불능 중.
  // 제주대 기본 이미지로 대신 제공함.
  return "http://img.libbook.co.kr/V2/noimages/f1e824448e669ef592a1_noimg.gif";
  const uri = `https://ecip.libbook.co.kr/api/?isbn=${isbn}&pUniv=f1e824448e669ef592a1&returnType=json`;
  try {
    const res = await trustyFetch("GET", uri);

    if (res.info().status !== 200) {
      throw new Error("Can't connect getNewBoooks Api");
    }

    console.debug(res.text());
    return "dummy";
  } catch (err) {
    console.warn(err);
    return "err";
  }
}

/**
 * 신간도서를 조회할때 사용함.
 *
 * @param size 불러올 사이즈
 */
export async function getNewBooks(size: number): Promise<BooksApiResponse> {
  const EMPTY_NEWBOOKS: BooksApiResponse = {
    isFuzzy: false,
    totalCount: 0,
    offset: 0,
    max: 0,
    abc: null,
    list: []
  };

  const date = new Date();
  const oneMonthBeforeDate = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    date.getDate()
  );
  const uri = `https://lib.jejunu.ac.kr/pyxis-api/1/collections/4/search?date_received=[${dateToString(
    oneMonthBeforeDate
  )}%20TO%20${dateToString(date)}]&max=${size}`;
  console.debug("getNewBooks, uri :", uri);

  try {
    const res = await trustyFetch("GET", uri);
    console.debug("response :", res);
    if (res.info().status !== 200) {
      throw new Error("Can't connect getNewBoooks Api");
    }

    const json: BooksApiWrapper = res.json();
    if (!json.success) {
      throw new Error("getNewBooks failed");
    }

    return json?.data ?? EMPTY_NEWBOOKS;
  } catch (err) {
    console.warn(err);
    return EMPTY_NEWBOOKS;
  }
}

export interface LibrarySeatProps {
  id: number;
  sectionName: string;
  capacity: number;
  available: number;
}

export interface LibrarySeatsApiResponse {
  success: boolean;
  data?: LibrarySeatProps[];
  message?: string;
}

/**
 * 현재 도서관 열람실별 좌석을 조회함.
 */
export async function getLibrarySeats(): Promise<LibrarySeatsApiResponse> {
  const uri = "http://203.253.194.135:8011/WebSeat/domian5.asp";
  try {
    const res = await trustyFetch("GET", uri);

    // if status isn't 200, throw error;
    if (res.info().status !== 200) {
      throw new Error(`Can't connect to address. Please contact to developer.`);
    }

    // resolve encoding issue.
    const bufferFromBase64 = Buffer.from(res.data, "base64");
    const body = iconv.decode(bufferFromBase64, "EUC-KR").toString();

    const $ = cheerio.load(body);

    const data: LibrarySeatProps[] = $("table")
      .eq(1)
      .find("tr")
      .slice(2)
      .toArray()
      .map((elem: any) => $(elem).find("td"))
      .map(
        (elem: any): LibrarySeatProps => ({
          id: parseInt(
            elem
              .eq(0)
              .text()
              .trim()
          ),
          sectionName: elem
            .eq(1)
            .text()
            .trim(),
          capacity: elem
            .eq(2)
            .text()
            .trim(),
          available: elem
            .eq(4)
            .text()
            .trim()
        })
      );

    console.debug("getLibrarySeats, data :", data);

    return createLibrarySeatsApiResponse("success", data);
  } catch (err) {
    console.warn(err);
    return createLibrarySeatsApiResponse(err);
  }
}

function createLibrarySeatsApiResponse(
  message: string,
  data?: LibrarySeatProps[]
): LibrarySeatsApiResponse {
  return {
    success: !!data,
    message,
    data
  };
}
