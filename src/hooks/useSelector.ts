import { useContext } from 'react';
import { GlobalState, IGlobalState } from '../GlobalState';

export default function useSelector<T>(
    selector: (state: IGlobalState, ...rest: any[]) => T,
    ...rest: any[]
) {
    const state = useContext(GlobalState);
    return selector(state, ...rest);
}
