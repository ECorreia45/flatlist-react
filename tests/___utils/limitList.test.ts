import limitList from '../../src/___utils/limitList';

describe('Util: limitList()', () => {

    it('Should return same list size when limit is LESS OR EQUAL THAN ZERO', () => {
        expect.assertions(2);
        const list = [1, 2, 3, 4, 5];
        const newList1 = limitList(list, 0);
        const newList2 = limitList(list, 0);

        expect(newList1.length).toEqual(list.length);
        expect(newList2.length).toEqual(list.length);
    });

    it('Should return same list size when limit is GREATER OR EQUAL THAN THE ARRAY LENGTH', () => {
        expect.assertions(2);
        const list = [1, 2, 3, 4, 5];
        const newList1 = limitList(list, list.length);
        const newList2 = limitList(list, list.length + 2);

        expect(newList1.length).toEqual(list.length);
        expect(newList2.length).toEqual(list.length);
    });

    it('Should return list at the size of the specified limit', () => {
        expect.assertions(2);
        const list = [1, 2, 3, 4, 5];
        const newList1 = limitList(list, list.length - 2);
        const newList2 = limitList(list, 1);

        expect(newList1.length).toBe(3);
        expect(newList2.length).toBe(1);
    });

    it('Should return sliced list', () => {
        expect.assertions(6);
        const list = [1, 2, 3, 4, 5];
        const newList1 = limitList(list, '2', 4);
        const newList2 = limitList(list, 3, '');
        const newList3 = limitList(list, 2, '-2');

        expect(newList1.length).toBe(2);
        expect(newList1).toEqual([3, 4]);
        expect(newList2.length).toBe(2);
        expect(newList2).toEqual([4, 5]);
        expect(newList3.length).toBe(1);
        expect(newList3).toEqual([3]);
    });

});
