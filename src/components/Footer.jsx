export default function Footer() {
  return (
    <footer className="footer">
      <div
        className="container"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <span>
          &copy; {new Date().getFullYear()} Abdul Bari. All rights reserved.
        </span>
        <span>Designed &amp; built with React + Framer Motion</span>
      </div>
    </footer>
  )
}
