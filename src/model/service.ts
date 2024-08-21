
interface IService{
    loadHoroscope(sign:string, language:string):Promise<string>;
}

export default IService;