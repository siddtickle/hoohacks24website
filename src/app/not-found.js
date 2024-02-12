import styles from "./styles/button.css"

export default function NotFound(){
    return (
        <div class="relative overflow-hidden flex items-center justify-center flex-col">
            <img
                src="/assets/main_landing.png"
                alt="Landing Page"
                layout="fill"
                class="object-cover"
            />
             <div class="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <a href="https://app.hoohacks.io">
                <button class="text-xl px-4 py-2 rounded text-white bg-black glow-on-hover">Register</button>
            </a>
            </div>
        </div>

    );
}