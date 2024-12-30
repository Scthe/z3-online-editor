import { UtilFn } from '.';
import { ensurePrefix } from '../../utils';

const UTILS_INSERT_TEXT = '$INSERT_UTILS_LIST$';
const UTILS_HELPER_TEXT =
  'At the end of this file you will find following utils:';

export function insertUtils(content: string, utils: UtilFn[]) {
  if (utils.length > 0) {
    const fnNames = utils.map((fn) => `${ensurePrefix(fn, '_')}()`);
    const utilsList = `${UTILS_HELPER_TEXT} ${fnNames.join(', ')}.`;
    content = content.replace(UTILS_INSERT_TEXT, utilsList);

    // const utilsCodeText = utils.map((fnName) => UTILS[fnName]).join('\n\n');
    // const spacer = `// ${'-'.repeat(5)} UTILS:`;
    // content = `${content}\n\n${spacer}\n${utilsCodeText}`;
  }

  return content;
}
