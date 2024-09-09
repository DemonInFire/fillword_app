const REMOVE_WORD_FROM_PREVIEW = 'remove';
const ADD_WORD_IN_PREVIEW = 'add';
const CLEAR_WORD_PREVIEW = 'clear';

const wordPreviewStatuses = {
  removeFromPreview: REMOVE_WORD_FROM_PREVIEW,
  addInPreview: ADD_WORD_IN_PREVIEW,
  clearPreview: CLEAR_WORD_PREVIEW
};

type TWordPreviewStatusesKeys = keyof typeof wordPreviewStatuses;
type TWordPreviewStatusesValues = typeof wordPreviewStatuses[TWordPreviewStatusesKeys];

export { REMOVE_WORD_FROM_PREVIEW, ADD_WORD_IN_PREVIEW, CLEAR_WORD_PREVIEW, wordPreviewStatuses };
export type { TWordPreviewStatusesValues };