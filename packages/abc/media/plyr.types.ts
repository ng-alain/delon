export type PlyrMediaType = 'audio' | 'video';
export type PlyrProvider = 'html5' | 'youtube' | 'vimeo';

export interface PlyrMediaSource {
  /**
   * Note: YouTube and Vimeo are currently not supported as audio sources.
   */
  type: PlyrMediaType;

  /**
   * Title of the new media. Used for the aria-label attribute on the play button, and outer container. YouTube and Vimeo are populated automatically.
   */
  title?: string;

  /**
   * This is an array of sources. For HTML5 media, the properties of this object are mapped directly to HTML attributes so more can be added to the object if required.
   */
  sources: PlyrSource[];

  /**
   * The URL for the poster image (HTML5 video only).
   */
  poster?: string;

  /**
   * An array of track objects. Each element in the array is mapped directly to a track element and any keys mapped directly to HTML attributes so as in the example above,
   * it will render as <track kind="captions" label="English" srclang="en" src="https://cdn.selz.com/plyr/1.0/example_captions_en.vtt" default> and similar for the French version.
   * Booleans are converted to HTML5 value-less attributes.
   */
  tracks?: PlyrTrack[];
}

export interface PlyrSource {
  /**
   * The URL of the media file (or YouTube/Vimeo URL).
   */
  src: string;
  /**
   * The MIME type of the media file (if HTML5).
   */
  type?: string;
  provider?: PlyrProvider;
  size?: number;
}

export type PlyrTrackKind = 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';

export interface PlyrTrack {
  /**
   * Indicates how the text track is meant to be used
   */
  kind: PlyrTrackKind;
  /**
   * Indicates a user-readable title for the track
   */
  label: string;
  /**
   * The language of the track text data. It must be a valid BCP 47 language tag. If the kind attribute is set to subtitles, then srclang must be defined.
   */
  srcLang?: string;
  /**
   * The URL of the track (.vtt file).
   */
  src: string;

  default?: boolean;
}
