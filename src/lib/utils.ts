export const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
});

export const formatPostDate = (date: string) => {
    if (!date) return;

    const [year, month, day] = date.split("-", 3);

    if (!(year && month && day)) return;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return `${months[parseInt(month) - 1]} ${day}, ${year}`;
};
