const container = () => {
  return ({ addComponents, config }) => {
    addComponents([
      {
        ".container": {
          maxWidth: "100%",
          margin: "0 25px",
          "@screen sm": {
            maxWidth: "640px",
            margin: "0 auto",
          },
          "@screen md": {
            maxWidth: "700px",
            margin: "0 auto",
          },
          "@screen lg": { 
            maxWidth: "970px",
            margin: "0 auto",
          },
          "@screen xl": {
            maxWidth: "1280px",
            margin: "0 auto",
          },
          // "@screen 2xl": {
          //   maxWidth: "1800px",
          //   margin: "0 auto",
          // },
        },
      },
    ]);
  };
};

module.exports = container;
