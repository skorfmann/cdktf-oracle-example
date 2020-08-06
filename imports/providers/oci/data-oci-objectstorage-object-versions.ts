// https://www.terraform.io/docs/providers/oci/r/data_oci_objectstorage_object_versions.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bucket": {
        "type": "string",
        "required": true
      },
      "delimiter": {
        "type": "string",
        "optional": true
      },
      "end": {
        "type": "string",
        "optional": true
      },
      "fields": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "items": {
        "type": [
          "list",
          [
            "object",
            {
              "etag": "string",
              "is_delete_marker": "bool",
              "md5": "string",
              "name": "string",
              "size": "string",
              "time_created": "string",
              "time_modified": "string",
              "version_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "namespace": {
        "type": "string",
        "required": true
      },
      "prefix": {
        "type": "string",
        "optional": true
      },
      "prefixes": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "start": {
        "type": "string",
        "optional": true
      },
      "start_after": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciObjectstorageObjectVersionsConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly delimiter?: string;
  readonly end?: string;
  readonly fields?: string;
  readonly namespace: string;
  readonly prefix?: string;
  readonly start?: string;
  readonly startAfter?: string;
  /** filter block */
  readonly filter?: DataOciObjectstorageObjectVersionsFilter[];
}
export class DataOciObjectstorageObjectVersionsItems extends ComplexComputedList {

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // is_delete_marker - computed: true, optional: false, required: true
  public get isDeleteMarker() {
    return this.getBooleanAttribute('is_delete_marker');
  }

  // md5 - computed: true, optional: false, required: true
  public get md5() {
    return this.getStringAttribute('md5');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getStringAttribute('size');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_modified - computed: true, optional: false, required: true
  public get timeModified() {
    return this.getStringAttribute('time_modified');
  }

  // version_id - computed: true, optional: false, required: true
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
}
export interface DataOciObjectstorageObjectVersionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciObjectstorageObjectVersions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciObjectstorageObjectVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_object_versions',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._delimiter = config.delimiter;
    this._end = config.end;
    this._fields = config.fields;
    this._namespace = config.namespace;
    this._prefix = config.prefix;
    this._start = config.start;
    this._startAfter = config.startAfter;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string;
  public get delimiter() {
    return this._delimiter;
  }
  public set delimiter(value: string | undefined) {
    this._delimiter = value;
  }

  // end - computed: false, optional: true, required: false
  private _end?: string;
  public get end() {
    return this._end;
  }
  public set end(value: string | undefined) {
    this._end = value;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string;
  public get fields() {
    return this._fields;
  }
  public set fields(value: string | undefined) {
    this._fields = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // items - computed: true, optional: false, required: true
  public items(index: string) {
    return new DataOciObjectstorageObjectVersionsItems(this, 'items', index);
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string) {
    this._namespace = value;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string;
  public get prefix() {
    return this._prefix;
  }
  public set prefix(value: string | undefined) {
    this._prefix = value;
  }

  // prefixes - computed: true, optional: false, required: true
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }

  // start - computed: false, optional: true, required: false
  private _start?: string;
  public get start() {
    return this._start;
  }
  public set start(value: string | undefined) {
    this._start = value;
  }

  // start_after - computed: false, optional: true, required: false
  private _startAfter?: string;
  public get startAfter() {
    return this._startAfter;
  }
  public set startAfter(value: string | undefined) {
    this._startAfter = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciObjectstorageObjectVersionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciObjectstorageObjectVersionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      delimiter: this._delimiter,
      end: this._end,
      fields: this._fields,
      namespace: this._namespace,
      prefix: this._prefix,
      start: this._start,
      start_after: this._startAfter,
      filter: this._filter,
    };
  }
}
