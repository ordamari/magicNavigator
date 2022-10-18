import { useNavigate } from "react-router-dom";

export function Redirect({ to }) {

    const navigate = useNavigate();

    if (to) {
        navigate(to);
    }

    return <div />
}