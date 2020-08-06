// https://www.terraform.io/docs/providers/oci/r/data_oci_objectstorage_object_lifecycle_policy.html
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
        "computed": true
      },
      "namespace": {
        "type": "string",
        "required": true
      },
      "rules": {
        "type": [
          "list",
          [
            "object",
            {
              "action": "string",
              "is_enabled": "bool",
              "name": "string",
              "object_name_filter": [
                "list",
                [
                  "object",
                  {
                    "exclusion_patterns": [
                      "list",
                      "string"
                    ],
                    "inclusion_patterns": [
                      "list",
                      "string"
                    ],
                    "inclusion_prefixes": [
                      "list",
                      "string"
                    ]
                  }
                ]
              ],
              "time_amount": "string",
              "time_unit": "string"
            }
          ]
        ],
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
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

export interface DataOciObjectstorageObjectLifecyclePolicyConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly namespace: string;
}
export class DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter extends ComplexComputedList {

  // exclusion_patterns - computed: true, optional: false, required: true
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }

  // inclusion_patterns - computed: true, optional: false, required: true
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }

  // inclusion_prefixes - computed: true, optional: false, required: true
  public get inclusionPrefixes() {
    return this.getListAttribute('inclusion_prefixes');
  }
}
export class DataOciObjectstorageObjectLifecyclePolicyRules extends ComplexComputedList {

  // action - computed: true, optional: false, required: true
  public get action() {
    return this.getStringAttribute('action');
  }

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_name_filter - computed: true, optional: false, required: true
  public get objectNameFilter() {
    return 'not implemented' as any;
  }

  // time_amount - computed: true, optional: false, required: true
  public get timeAmount() {
    return this.getStringAttribute('time_amount');
  }

  // time_unit - computed: true, optional: false, required: true
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
}

// Resource

export class DataOciObjectstorageObjectLifecyclePolicy extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciObjectstorageObjectLifecyclePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_object_lifecycle_policy',
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

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string) {
    this._namespace = value;
  }

  // rules - computed: true, optional: false, required: true
  public rules(index: string) {
    return new DataOciObjectstorageObjectLifecyclePolicyRules(this, 'rules', index);
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      namespace: this._namespace,
    };
  }
}
