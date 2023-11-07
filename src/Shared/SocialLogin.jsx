
const SocialLogin = () => {
    const handleGoogleLogin = () => {
        console.log('login with google');
    }
    return (
        <section className="max-w-sm">
            <div className="divider">or</div>
            <button onClick={handleGoogleLogin} className="border rounded-md w-full py-2">Login with google</button>
        </section>
    );
};

export default SocialLogin;