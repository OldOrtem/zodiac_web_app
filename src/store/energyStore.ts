
import { makeAutoObservable } from "mobx";
import IStore from "../model/store";

class EnergyStore implements IStore {
    private static instance: EnergyStore;
    public value: number;

    private constructor() {
        this.value = 0;
        makeAutoObservable(this);
    }

    public static getInstance(): EnergyStore {
        if (!EnergyStore.instance) {
            EnergyStore.instance = new EnergyStore();
        }
        return EnergyStore.instance;
    }

    public get(): number {
        return this.value;
    }

    public set(val:number): void {
        this.value = val;
    }
}

export default EnergyStore.getInstance();
