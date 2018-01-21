export const col = units => {
  const width = String(100 / 12 * units);

  return `
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 1rem;
  padding-left: 1rem;

  @media screen and (min-width: 768px) {
    flex: 0 0 ${width}%;
    max-width: ${width}%;
  }
  `;
};
