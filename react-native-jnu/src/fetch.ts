import RNFetchBlob from "rn-fetch-blob";

const { fetch: trustyFetch } = RNFetchBlob.config({ trusty: true });
const { fetch } = RNFetchBlob;

export { fetch, trustyFetch };
