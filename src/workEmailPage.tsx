import { TextField } from "@mui/material";

export default function WorkEmailPage() {
  return (
    <div>
      <h3 className="form-headline">which email would you like to connect?</h3>
      <p className="sub-headline">
        this help us understand if it's multiple personal emails or a work
        account.
      </p>
      <TextField
        placeholder="example@gmail.com"
        required
        type="email"
        size="small"
        margin="normal"
      />
    </div>
  );
}
