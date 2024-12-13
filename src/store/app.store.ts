import { DataService } from '@/home/helpers/data-service';
import { create } from 'zustand';

interface AppState {
    serviceSelected: DataService | null;
    setServiceSelected: (service: DataService) => void;
}

export const useAppStore = create<AppState>()((set) => ({
    serviceSelected: null,
    setServiceSelected: (service) => set({ serviceSelected: service }),
}));