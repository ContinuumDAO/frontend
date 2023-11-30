//This component exists in order to trick the SideNav component into thinking
//that is hovering over the actual footer.

export function FakeFooter() {
  return (
    <div id="footer" className="-pt-56 relative z-20">
      <div className="absolute max-w-7xl bg-transparent py-72">
        asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
      </div>
    </div>
  )
}
