/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query getTask {\n    task(id: 1) {\n      id\n      title\n      done\n    }\n  }\n": types.GetTaskDocument,
    "\n  query getAllTasks {\n    tasks {\n      id\n      title\n      done\n    }\n  }\n": types.GetAllTasksDocument,
};

export function graphql(source: "\n  query getTask {\n    task(id: 1) {\n      id\n      title\n      done\n    }\n  }\n"): (typeof documents)["\n  query getTask {\n    task(id: 1) {\n      id\n      title\n      done\n    }\n  }\n"];
export function graphql(source: "\n  query getAllTasks {\n    tasks {\n      id\n      title\n      done\n    }\n  }\n"): (typeof documents)["\n  query getAllTasks {\n    tasks {\n      id\n      title\n      done\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;