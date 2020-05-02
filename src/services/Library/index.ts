import {
  BooksApiResponse,
  getNewBooks,
  getThumbnailUriByIsbn,
  LibrarySeatsApiResponse,
  getLibrarySeats,
  getCollectedBooksByKeyword
} from "@sqd-ffrog/react-native-jnu";

export interface BranchVolume {
  id: number;
  location: string;
  hasItem: boolean;
  state: string;
  isSubscribed: boolean;
  volume: string;
}

export interface Book {
  thumbnailUri: string;
  id: number;
  isbn: string;
  author: string;
  publisher: string;
  title: string;
  branchVolumes: BranchVolume[];
}

export interface NewBook {
  thumbnailUri: string;
  id: number;
  isbn: string;
  author: string;
  publisher: string;
  title: string;
}

export interface BookResponse<DataT> {
  success: boolean;
  data?: DataT[];
  totalCount?: number;
}

export async function getCollectedBooksByKeywordApi(
  keyword: string,
  page: number,
  size: number
): Promise<BookResponse<Book>> {
  const INITIAL_RESULT: BookResponse<Book> = {
    success: false
  };

  try {
    const collectedBooksByKeywordApiResponse: BooksApiResponse = await getCollectedBooksByKeyword(
      keyword,
      page,
      size
    );
    return {
      success: true,
      totalCount: collectedBooksByKeywordApiResponse.totalCount,
      data: await Promise.all(
        collectedBooksByKeywordApiResponse.list.map(
          async ({
            id,
            isbn,
            author,
            titleStatement: title,
            publication: publisher,
            branchVolumes
          }): Promise<Book> => {
            return {
              author,
              title,
              isbn,
              id,
              publisher,
              thumbnailUri: await getThumbnailUriByIsbn(isbn),
              branchVolumes: branchVolumes.map(
                ({ id, isSubscribed, hasItem, name, volume, cState }) => ({
                  id,
                  location: name,
                  hasItem,
                  state: cState,
                  isSubscribed,
                  volume
                })
              )
            };
          }
        )
      )
    };
  } catch (err) {
    console.warn(err);
    return INITIAL_RESULT;
  }
}

export async function getNewBooksApi(
  max: number = 20
): Promise<BookResponse<NewBook>> {
  const INITIAL_RESULT: BookResponse<NewBook> = {
    success: false
  };

  try {
    const newBooksApiResponse: BooksApiResponse = await getNewBooks(max);
    return {
      success: true,
      data: await Promise.all(
        newBooksApiResponse.list.map(
          async ({
            id,
            isbn,
            author,
            titleStatement: title,
            publication: publisher
          }): Promise<NewBook> => {
            return {
              author,
              title,
              isbn,
              id,
              publisher,
              thumbnailUri: await getThumbnailUriByIsbn(isbn)
            };
          }
        )
      )
    };
  } catch (err) {
    console.warn(err);
    return INITIAL_RESULT;
  }
}

export async function getLibrarySeatsApi(): Promise<LibrarySeatsApiResponse> {
  return getLibrarySeats();
}

export async function getBooksByBookIdApi() {
  
}
