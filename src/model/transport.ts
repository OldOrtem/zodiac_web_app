
interface ITransport{
    post(sign:string, language:"original"|"translated"):Promise<string>;
}

export default ITransport;