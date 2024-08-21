import IService from "../model/service";
import ITransport from "../model/transport";
import transport from "../transport/Transport";


class HoroscopeService implements IService{
    
    private static instance:HoroscopeService;
 
    private transport:ITransport;
    
    private constructor(transport: ITransport){
        this.transport = transport;
    }

    public static getInstance(transport: ITransport): HoroscopeService {
        if (!HoroscopeService.instance) {
            HoroscopeService.instance = new HoroscopeService(transport);
        }
        return HoroscopeService.instance;
    }
    
    public async loadHoroscope(sign:string, language:string):Promise<string>{
        const response: string = await this.transport.post(sign.toLowerCase(), language === "ru" ? "original": "translated");
    
        return response;
    }
   
}

export default HoroscopeService.getInstance(transport);
