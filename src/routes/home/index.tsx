import { Button } from "../../component/Button"
export const Home = () => {

    return (
        <div>This is the home page
        <div className='ml-3 mt-5 items-center justify-center flex flex-col gap-8'>
        
        <Button className="justify-self-center" size="default">
          Show All Episode
        </Button>
        <Button
          className="justify-self-center"
          variant="secondary"
          size="default"
        >
          Show All Episode
        </Button>
        <Button
          className="justify-self-center"
          variant="destructive"
          size="default"
        >
          Show All Episode
        </Button>
        <Button
          className="justify-self-center"
          variant="ghost"
          size="default"
        >
          Show All Episode
        </Button>

        </div>
        </div>
    )
}