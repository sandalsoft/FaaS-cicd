// from https://stackoverflow.com/questions/51393952/mock-inner-axios-create/51414152#51414152
const mockAxios: any = jest.genMockFromModule('axios');

mockAxios.get = jest.fn(() => mockAxios);
mockAxios.post = jest.fn(() => mockAxios);

export default mockAxios;