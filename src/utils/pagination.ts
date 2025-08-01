export const getPageList = (
  current: number,
  total: number
  // maxVisible: number = 5
): (number | string)[] => {
  const pages: (number | string)[] = [];
  const showLeftEllipsis = current > 3;
  const showRightEllipsis = current < total - 2;

  if (showLeftEllipsis) pages.push(1, "...");
  else for (let i = 1; i < Math.min(4, total + 1); i++) pages.push(i);

  if (showLeftEllipsis && showRightEllipsis) {
    pages.push(current - 1, current, current + 1);
  } else if (showRightEllipsis) {
    for (let i = current; i <= Math.min(current + 2, total); i++) {
      if (!pages.includes(i)) pages.push(i);
    }
  }

  if (showRightEllipsis) pages.push("...", total);
  else {
    for (let i = Math.max(total - 2, 1); i <= total; i++) {
      if (!pages.includes(i)) pages.push(i);
    }
  }

  return pages;
};
