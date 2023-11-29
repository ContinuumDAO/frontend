//This component exists in order to trick the SideNav component into thinking
//that is hovering over the actual footer.

export function FakeFooter() {
  return (
    <div id="footer" className="relative z-50">
      <div className="absolute w-full bg-transparent py-56"></div>
    </div>
  )
}
