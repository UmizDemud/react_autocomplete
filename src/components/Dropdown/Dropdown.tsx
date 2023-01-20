import React, { useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import cn from 'classnames';
import './index.css'

type Props = {
  _id: string;
  placeholder: string;
  words: string[];
  delay: number;
  save: (name: string) => void;
};

export const Dropdown: React.FC<Props> = ({
  _id,
  words,
  placeholder,
  delay,
  save,
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [pending, setPending] = useState(true);
  const [selectedSug, setSelectedSug] = useState(-1);
  const [lastSelected, setLastSelected] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event:  any) {
      if (dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setPending(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const setSuggestionsDebounced = useCallback(
    debounce(() => {
      if (inputRef?.current?.value) {
        const input = inputRef.current.value.toLowerCase();
        setSuggestions(words.filter(word => word.toLowerCase().includes(input)));
      } else {
        setSuggestions([])
      }
      setSelectedSug(-1);
      setPending(false);
    }, delay),
    [],
  );

  const handleChange = useCallback(
    () => {
      setPending(true);
      setSuggestionsDebounced();
    }, 
  []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('!')
    
    switch (e.key) {
      case 'ArrowDown':
        if (selectedSug < suggestions.length - 1) {
          console.log(selectedSug)
          setSelectedSug(prev => prev + 1);
        } else {
          setSelectedSug(0);
        }
        break;
      case 'ArrowUp':
        if (selectedSug > 0) {
          setSelectedSug(prev => prev - 1);
        } else {
          setSelectedSug(suggestions.length - 1)
        }
        break;
      case 'Enter':
        if (inputRef?.current?.value) {
          if (selectedSug === -1) {
            if (suggestions.includes(inputRef.current.value)) {
              inputRef.current.value = '';
              save(suggestions[selectedSug]);
            }
          } else {
            inputRef.current.value = suggestions[selectedSug];
            save(suggestions[selectedSug]);
            setSelectedSug(-1);
          }
        }
        setPending(true);
        break;
      default:
        break;
    }
  }, [selectedSug, setSelectedSug, save, setPending, inputRef]);

  return (
    <div className="dropdown is-active">
      <div className="dropdown-trigger">
        <input
          type="text"
          placeholder={placeholder}
          className="input"
          ref={inputRef}
          onChange={() => handleChange()}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="deniz-dropdown dropdown-menu" role="menu">
        { !pending && !!suggestions.length &&
          <div ref={dropdownRef} className="dropdown-content">
            {
              suggestions.map((word, i) => (
                <div
                  onMouseOver={() => {
                    setLastSelected(selectedSug);
                    setSelectedSug(i);
                  }}
                  onMouseLeave={() => {
                    setSelectedSug(lastSelected);
                  }}
                  onClick={() => {
                    if (inputRef.current) {
                      inputRef.current.value = suggestions[selectedSug];
                      save(suggestions[selectedSug]);
                      setSelectedSug(-1);
                      setPending(true);
                    }
                  }}
                  key={word} 
                  className={cn(
                    "dropdown-item",
                    {'selected': selectedSug === i},
                    {'is-link': selectedSug !== i},
                )}>
                  <p className="has-text-link">{word}</p>
                </div>
              ))
            }
          </div>
        }
        { !pending && !suggestions.length &&
          <div className="dropdown-content">
            <div>
              <p>
                No matching suggestions
              </p>
            </div>
          </div>
        }
      </div>
    </div>
  )
};
