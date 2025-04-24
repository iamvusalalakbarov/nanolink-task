const TableRowDivider = () => {
  return (
    <div className="h-3 flex items-center">
      <div
        className="h-px w-full relative"
        style={{
          background:
            "linear-gradient(90deg, rgba(106, 33, 244, 0) 0%, rgba(106, 33, 244, 0.9) 44.79%)",
        }}
      >
        <div
          className="w-[132px] h-3 absolute top-1/2 -translate-y-1/2 left-[728px]"
          style={{
            background:
              "radial-gradient(49.08% 52.1% at 49.96% 50.21%, rgba(106, 33, 244, 0.5) 0%, rgba(18, 20, 45, 0) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TableRowDivider;
