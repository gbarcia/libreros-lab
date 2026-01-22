import ContentPanel from '../components/ui/ContentPanel';
import TerminalChat from '../components/ui/TerminalChat';

function LabAssistant({
  isActive,
  onClose,
  isManual = false,
  isMobile,
  onNext,
  onPrev,
  currentIndex,
  totalSections
}) {
  return (
    <ContentPanel
      isActive={isActive}
      onClose={onClose}
      isManual={isManual}
      title="Lab Assistant"
      stamp="TERMINAL v1.0"
      isMobile={isMobile}
      onNext={onNext}
      onPrev={onPrev}
      currentIndex={currentIndex}
      totalSections={totalSections}
      className="lab-assistant-panel"
    >
      <TerminalChat />
    </ContentPanel>
  );
}

export default LabAssistant;
