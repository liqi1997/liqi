import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import store from "../../store";

function Code() {

    const location = useLocation();

    useEffect(() => {

        console.log('location ', location)

        if (location && location.search) {

            let paramsList = location.search.split('?code=');

            if (paramsList.length < 2) {
                return;
            }

            store.app.callFunction({
                name: 'githubLogin',
                data: {
                    code: paramsList[1],
                }
            }).then(res => {
                console.log('res', res)
            }).catch(err => console.error)



        }






    }, [location]);

    return <div>

    </div>
}

export default Code;