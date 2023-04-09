import { FlatList } from "react-native";
import React from "react";
import { SegementButton } from "../../atoms";
import { SegmentToggle } from "../../organisms";
import styled from "styled-components/native";

const SWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-vertical: 16px;
`;

interface Props {
  SegmentToggle: typeof SegmentToggle;
  activeSegment: string;
  setActiveTab: React.Dispatch<
    React.SetStateAction<keyof typeof SegmentToggle>
  >;
}

export const SegmentButtons: React.FC<Props> = ({
  SegmentToggle,
  activeSegment,
  setActiveTab,
}) => {
  return (
    <>
      <SWrapper>
        {Object.keys(SegmentToggle).map((el, i) => {
          const thisModule = el as keyof typeof SegmentToggle;
          return (
            <SegementButton
              key={i}
              activeSegment={activeSegment}
              value={thisModule}
              setActiveTab={() => setActiveTab(thisModule)}
            />
          );
        })}
      </SWrapper>
    </>
  );
};
