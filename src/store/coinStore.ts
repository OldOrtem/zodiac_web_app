
import { makeAutoObservable } from "mobx";
import IStore from "../model/store";

class CoinStore implements IStore {
    private static instance: CoinStore;
    public value: number;

    private constructor() {
        this.value = 0;
        makeAutoObservable(this);
    }

    public static getInstance(): CoinStore {
        if (!CoinStore.instance) {
            CoinStore.instance = new CoinStore();
        }
        return CoinStore.instance;
    }

    public get(): number {
        return this.value;
    }

    public set(val:number): void {
        this.value = val;
    }
}

export default CoinStore.getInstance();
