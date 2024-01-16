/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
import CKEditorComponent from './ckeditor';
export default CKEditorComponent;
declare module 'vue' {
    interface GlobalComponents {
        Ckeditor: typeof CKEditorComponent;
    }
}
