
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SchoolCodeEntry = () => {
  const [schoolCode, setSchoolCode] = useState("");
  const [showAlert, setShowAlert] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!schoolCode.trim()) {
      setShowAlert("Please enter a school code");
      return;
    }
    // Simulate code validation
    setShowAlert("Entered Code Is Wrong, Please Enter Correct Code.");
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              I am a <span className="text-primary">parent</span> shopping for uniforms
            </h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Enter school code"
                value={schoolCode}
                onChange={(e) => setSchoolCode(e.target.value)}
                className="w-full"
              />
              <Button type="submit" className="w-full">
                Enter Store
              </Button>
            </form>
            {showAlert && (
              <p className="mt-4 text-sm text-red-600">{showAlert}</p>
            )}
            <p className="mt-4 text-sm text-gray-600 flex items-center gap-2">
              <span>❓</span> Need Help
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
