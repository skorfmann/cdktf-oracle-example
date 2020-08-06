// https://www.terraform.io/docs/providers/oci/r/data_oci_objectstorage_replication_sources.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "namespace": {
        "type": "string",
        "required": true
      },
      "replication_sources": {
        "type": [
          "list",
          [
            "object",
            {
              "policy_name": "string",
              "source_bucket_name": "string",
              "source_region_name": "string"
            }
          ]
        ],
        "computed": true
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

export interface DataOciObjectstorageReplicationSourcesConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly namespace: string;
  /** filter block */
  readonly filter?: DataOciObjectstorageReplicationSourcesFilter[];
}
export class DataOciObjectstorageReplicationSourcesReplicationSources extends ComplexComputedList {

  // policy_name - computed: true, optional: false, required: true
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // source_bucket_name - computed: true, optional: false, required: true
  public get sourceBucketName() {
    return this.getStringAttribute('source_bucket_name');
  }

  // source_region_name - computed: true, optional: false, required: true
  public get sourceRegionName() {
    return this.getStringAttribute('source_region_name');
  }
}
export interface DataOciObjectstorageReplicationSourcesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciObjectstorageReplicationSources extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciObjectstorageReplicationSourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_replication_sources',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._namespace = config.namespace;
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string) {
    this._namespace = value;
  }

  // replication_sources - computed: true, optional: false, required: true
  public replicationSources(index: string) {
    return new DataOciObjectstorageReplicationSourcesReplicationSources(this, 'replication_sources', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciObjectstorageReplicationSourcesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciObjectstorageReplicationSourcesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      namespace: this._namespace,
      filter: this._filter,
    };
  }
}
