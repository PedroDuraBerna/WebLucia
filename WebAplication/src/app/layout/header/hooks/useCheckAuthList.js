import { useMemo, useState } from "react";

// Este hook nos devuelve los items que se pueden mostrar en base a la autenticación
export const useCheckAuthList = (auth = '', items = [{ permission: '' }]) => {

    const [itemsFiltered, setItemsFiltered] = useState(items);

    useMemo(() => {

        switch (auth) {
            case ' not-authenticated':
                setItemsFiltered(items.filter(item => (item.permission === 'not-authenticated' || item.permission === 'allways')));
                break;
            case 'authenticated':
                setItemsFiltered(items.filter(item => (item.permission === 'authenticated' || item.permission === 'allways')));
                break;
            case 'authenticated-editor':
                setItemsFiltered(items.filter(item => (item.permission === 'authenticated' || item.permission === 'authenticated-editor' || item.permission === 'allways')));
                break;
            case 'authenticated-editor-admin':
                setItemsFiltered(items.filter(item => (item.permission === 'authenticated' || item.permission === 'authenticated-editor' || item.permission === 'authenticated-editor-admin' || item.permission === 'allways')));
                break;
            default:
                setItemsFiltered(items.filter(item => (item.permission === 'not-authenticated' || item.permission === 'allways')));
                break;
        }

    }, [auth])

    return itemsFiltered;

}
