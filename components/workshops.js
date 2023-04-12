import Session from "./session"

export default function Workshops() {
    return (
      <>
        <ul className='workshops'>
          <li>
            <Session title='Llama' frequency='never'></Session>
          </li>
        </ul>
      </>
    )
  }