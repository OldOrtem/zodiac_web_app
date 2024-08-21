import ILangService from "../model/langService";
import ILangStore from "../model/langStore";
import langStore from "../store/langStore";


class LangService implements ILangService{
    
    private static instance: LangService;
    private langStore: ILangStore;

    private langs: string[];
    private currLangNum: number;

    private constructor(langStore:ILangStore) {
        this.langs = ["en", "ru"]
        this.langStore = langStore;
        const lang = langStore.getlang();
        if (lang) {
            this.currLangNum = this.langs.indexOf(lang);
        } else {
            this.currLangNum = 0;
            langStore.setDefaultTheme(this.langs[this.currLangNum]);
        }
    }

    public static getInstance(themeStore:ILangStore): LangService {
        if (!LangService.instance) {
            LangService.instance = new LangService(themeStore);
        }
        return LangService.instance;
    }

    public toggleLang(): string {
        const newLang = this.langs[++this.currLangNum % this.langs.length];
        this.langStore.setLang(newLang);
        return newLang;
    }

    public getLang(): string {
        return this.langStore.getlang();
    }
}

export default LangService.getInstance(langStore);