export default function Box({ children }: { children: React.ReactNode }) {
    return (
        <section className="flex flex-col p-12 gap-8 bg-white">
            {children}
        </section>
    )
}
