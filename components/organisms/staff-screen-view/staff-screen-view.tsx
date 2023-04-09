import React, { useState } from "react";
import { SegmentButtons } from "../../molecules";
import { Card } from "../../molecules";

export enum SegmentToggle {
  All = "all",
  Confirmed = "confirmed",
  Pending = "pending",
}

export const StaffScreenView = () => {
  const [activeTab, setActivetab] = useState<keyof typeof SegmentToggle>(
    Object.keys(SegmentToggle)[0] as keyof typeof SegmentToggle
  );

  return (
    <>
      <SegmentButtons
        SegmentToggle={SegmentToggle}
        activeSegment={activeTab}
        setActiveTab={setActivetab}
      />
      <Card />
    </>
  );
};
