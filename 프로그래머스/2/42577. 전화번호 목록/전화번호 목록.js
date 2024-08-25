function solution(phone_book) {
    phone_book.sort();
    const isDuplicate = phone_book.some((number, idx) =>  idx < phone_book.length - 1 && phone_book[idx + 1].startsWith(number))
    return isDuplicate ? false : true;
}