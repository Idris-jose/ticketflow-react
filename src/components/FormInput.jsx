export default function FormInput({ type = "text", placeholder, register, name, error, value, onChange, ...props }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        {...(register ? register(name) : { value, onChange })}
        className="w-full border rounded-lg px-4 py-2"
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
