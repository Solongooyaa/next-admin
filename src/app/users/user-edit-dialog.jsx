import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const UserEditDialog = ({ open, setCreateDialogOpen, item }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async () => {
    await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
      }),
    });
    setCreateDialogOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setCreateDialogOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create user</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              id="name"
              defaultValue="firstname"
              value={firstName}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              id="username"
              defaultValue="lastname"
              value={lastName}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              defaultValue="email"
              value={email}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => setCreateDialogOpen(false)}
            variant="outline"
            type="button"
          >
            Cancel
          </Button>
          <Button onClick={addUser} type="submit">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
