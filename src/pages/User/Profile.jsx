import { Helmet } from "react-helmet-async";
import SectionHeading from "../../Shared/SectionHeading";
import useContextHook from "../../hooks/useContextHook";

const Profile = () => {
    const { user } = useContextHook();
    const { displayName, email, photoURL, metadata } = user;

    return (
        <>
            <Helmet>
                <title>Foodbuzz | Profile</title>
            </Helmet>
            <section className="">
                <SectionHeading>{`Profile of ${displayName}`}</SectionHeading>
                <div className="grid grid-cols-3 gap-4">
                    <figure className="h-80">
                        <img src={photoURL} alt="User profile image" className="h-full mx-auto" />
                    </figure>
                    <div className="col-span-2 text-xl font-semibold space-y-4">
                        <p>Name: {displayName}</p>
                        <p>Email: {email}</p>
                        <p>Logged in since: {metadata.lastSignInTime}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;