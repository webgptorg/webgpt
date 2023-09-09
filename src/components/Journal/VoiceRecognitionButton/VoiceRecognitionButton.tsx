import { MutableRefObject, useState } from 'react';
import { string_translate_language } from '../../../utils/typeAliases';

interface VoiceRecognitionButtonProps {
    /**
     * A reference to the textarea where the transcript should be written.
     */
    textareaRef: MutableRefObject<HTMLTextAreaElement | null | undefined> /* <- TODO: RefObject<HTMLTextAreaElement> */;

    /**
     * The language code to use for voice recognition (e.g. "en").
     */
    voiceLanguage: string_translate_language;
}

/**
 * A button component that starts voice recognition and writes to a given textarea.
 */
export function VoiceRecognitionButton(props: VoiceRecognitionButtonProps) {
    const { textareaRef, voiceLanguage } = props;
    const [speechRecognition, setSpeechRecognition] = useState<SpeechRecognition | null>(null);

    return (
        <button
            onClick={() => {
                if (speechRecognition) {
                    speechRecognition.stop();
                    setSpeechRecognition(null);
                } else {
                    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                    const newSpeechRecognition = new SpeechRecognition();

                    // TODO: Use> recognition.grammars = ...
                    newSpeechRecognition.lang = voiceLanguage;
                    newSpeechRecognition.continuous = true;
                    newSpeechRecognition.interimResults = true;
                    newSpeechRecognition.maxAlternatives = 1;

                    newSpeechRecognition.addEventListener('result', (event) => {
                        const transcript = Array.from(event.results)
                            .map((result: any) => result[0].transcript)
                            .join('');

                        // TODO: !! Append the text do NOT override
                        // TODO: !! Insert the text where the cursor is
                        textareaRef.current!.value = transcript;
                    });

                    newSpeechRecognition.start();
                    setSpeechRecognition(newSpeechRecognition);
                }
            }}
        >
            {speechRecognition ? 'Stop Recording' : 'Start Recording'}
        </button>
    );
}

/**
 * TODO: !! Stop recording when stop speaking
 * TODO: !! Stop recording when unfocus textarea
 * TODO: !! Reset recording after send
 * TODO: !! Conversation mode - auto switch between dictation and speech
 * TODO: !! Auto sent - with "odeslat" OR longer pause
 * TODO: !! For all browsers
 */
