export const hex2rgba = (hex: string, alpha = 1) => {
    let parts: RegExpMatchArray | [] | null = hex.match(/\w\w/g);
    parts = parts !== null ? parts : [];
    const [r, g, b] = parts?.map((x) => parseInt(x, 16));

    return `rgba(${r},${g},${b},${alpha})`;
};
