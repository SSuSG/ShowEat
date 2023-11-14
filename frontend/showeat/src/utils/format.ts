/* Function for Line Breaking Text by '\n' */
function breakTextLine(text: string): string {
    return text
        .split("\n")
        .map((line) => line)
        .join("<br />");
}

/* Function for Calculating Expiry Date */
function calcExpiryDate(endDateStr: string) {
    const endDate = new Date(endDateStr);
    endDate.setDate(endDate.getDate() + 180);

    const year = endDate.getFullYear();
    const month = endDate.getMonth() + 1;
    const day = endDate.getDate();

    return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
}

/* Function for Calculating Remaining Time */
function calcRemainTime(endDateStr: string) {
    const currentDate = new Date();
    const endDate = new Date(endDateStr);
    endDate.setHours(23, 59, 59, 999);
    const timeRemaining = endDate.getTime() - currentDate.getTime();

    if (timeRemaining < 0) {
        return "이미 마감되었습니다.";
    }

    const secondsRemaining = Math.floor(timeRemaining / 1000);
    if (secondsRemaining >= 86400) {
        const daysRemaining = Math.floor(secondsRemaining / 86400);
        return `${daysRemaining}일`;
    }
    if (secondsRemaining >= 3600) {
        const hoursRemaining = Math.floor(secondsRemaining / 3600);
        return `${hoursRemaining}시간`;
    }
    if (secondsRemaining >= 60) {
        const minutesRemaining = Math.floor(secondsRemaining / 60);
        return `${minutesRemaining}분`;
    }
    return `${secondsRemaining}초`;
}

/* Function for Changing Font Weight */
function changeFontWeight(text: string): string {
    const thinText = text.match(/---(.*?)---/g);
    const boldText = text.match(/\.\.\.(.*?)\.\.\./g);

    let weightedText = text;

    if (thinText) {
        thinText.forEach((phrase: string) => {
            weightedText = weightedText.replace(
                phrase,
                `<span style="font-weight: 200;">${phrase.substring(3, phrase.length - 3)}</span>`,
            );
        });
    }

    if (boldText) {
        boldText.forEach((phrase: string) => {
            weightedText = weightedText.replace(
                phrase,
                `<span style="font-weight: 700;">${phrase.substring(3, phrase.length - 3)}</span>`,
            );
        });
    }

    return weightedText;
}

/* Function for Making Business ID Number */
function formatBusinessNumber(numStr: string): string {
    if (numStr.length !== 10) {
        return numStr;
    }

    return `${numStr.substring(0, 3)}-${numStr.substring(3, 5)}-${numStr.substring(5, 10)}`;
}

/* Function for Changing Date Format */
function formatDate(dateStr: string): string {
    const dateParts = dateStr.split("-");

    if (dateParts.length !== 3) {
        return dateStr;
    }

    const [year, month, day] = dateParts;

    return `${year}. ${parseInt(month, 10)}. ${parseInt(day, 10)}.`;
}

/* Function for Making Money Format */
function formatMoney(number: number): string {
    return `￦${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

/* Function for Making Phone Number Format */
function formatPhoneNumber(text: string): string {
    const digits = text.replace(/\D/g, "").slice(0, 11);

    if (digits.length <= 3) {
        return digits;
    }

    if (digits.length <= 7) {
        return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    }

    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}

/* Function for Extracting and Parsing Number */
function parseNumber(text: string): number {
    const numStrArray = text.match(/\d+/);

    if (!numStrArray || numStrArray.length === 0) {
        return 50;
    }

    return parseInt(numStrArray[0], 10);
}

// ----------------------------------------------------------------------------------------------------

/* Export */
export {
    breakTextLine,
    calcExpiryDate,
    calcRemainTime,
    changeFontWeight,
    formatBusinessNumber,
    formatDate,
    formatMoney,
    formatPhoneNumber,
    parseNumber,
};
