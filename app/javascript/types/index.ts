export type EventParams = {
  id?: number;
  type: string;
  date: string;
  title: string;
  speaker: string;
  host: string;
  published: boolean;
  created_at?: string;
  updated_at?: string;
};

export type EventRequiredParams = Required<EventParams>;

export type FormErrors = {
  type?: string;
  date?: string;
  title?: string;
  speaker?: string;
  host?: string;
};

export type EventListProps = {
  events: EventRequiredParams[];
};

export type EventProps = {
  events: EventRequiredParams[];
  onDelete: (eventId: number) => Promise<void>;
};

export type EventFormProps = {
  events?: EventRequiredParams[];
  onSave: (event: EventParams) => Promise<void>;
};

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;
export type EventKey = keyof EventParams;
