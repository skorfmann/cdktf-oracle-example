// https://www.terraform.io/docs/providers/oci/r/data_oci_dataflow_applications.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "applications": {
        "type": [
          "list",
          [
            "object",
            {
              "archive_uri": "string",
              "arguments": [
                "list",
                "string"
              ],
              "class_name": "string",
              "compartment_id": "string",
              "configuration": [
                "map",
                "string"
              ],
              "defined_tags": [
                "map",
                "string"
              ],
              "description": "string",
              "display_name": "string",
              "driver_shape": "string",
              "executor_shape": "string",
              "file_uri": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "language": "string",
              "logs_bucket_uri": "string",
              "num_executors": "number",
              "owner_principal_id": "string",
              "owner_user_name": "string",
              "parameters": [
                "list",
                [
                  "object",
                  {
                    "name": "string",
                    "value": "string"
                  }
                ]
              ],
              "private_endpoint_id": "string",
              "spark_version": "string",
              "state": "string",
              "time_created": "string",
              "time_updated": "string",
              "warehouse_bucket_uri": "string"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "display_name_starts_with": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "owner_principal_id": {
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

export interface DataOciDataflowApplicationsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly displayNameStartsWith?: string;
  readonly ownerPrincipalId?: string;
  /** filter block */
  readonly filter?: DataOciDataflowApplicationsFilter[];
}
export class DataOciDataflowApplicationsApplicationsParameters extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataOciDataflowApplicationsApplications extends ComplexComputedList {

  // archive_uri - computed: true, optional: false, required: true
  public get archiveUri() {
    return this.getStringAttribute('archive_uri');
  }

  // arguments - computed: true, optional: false, required: true
  public get arguments() {
    return this.getListAttribute('arguments');
  }

  // class_name - computed: true, optional: false, required: true
  public get className() {
    return this.getStringAttribute('class_name');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // configuration - computed: true, optional: false, required: true
  public get configuration() {
    return 'not implemented' as any;
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // driver_shape - computed: true, optional: false, required: true
  public get driverShape() {
    return this.getStringAttribute('driver_shape');
  }

  // executor_shape - computed: true, optional: false, required: true
  public get executorShape() {
    return this.getStringAttribute('executor_shape');
  }

  // file_uri - computed: true, optional: false, required: true
  public get fileUri() {
    return this.getStringAttribute('file_uri');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // language - computed: true, optional: false, required: true
  public get language() {
    return this.getStringAttribute('language');
  }

  // logs_bucket_uri - computed: true, optional: false, required: true
  public get logsBucketUri() {
    return this.getStringAttribute('logs_bucket_uri');
  }

  // num_executors - computed: true, optional: false, required: true
  public get numExecutors() {
    return this.getNumberAttribute('num_executors');
  }

  // owner_principal_id - computed: true, optional: false, required: true
  public get ownerPrincipalId() {
    return this.getStringAttribute('owner_principal_id');
  }

  // owner_user_name - computed: true, optional: false, required: true
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }

  // parameters - computed: true, optional: false, required: true
  public get parameters() {
    return 'not implemented' as any;
  }

  // private_endpoint_id - computed: true, optional: false, required: true
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }

  // spark_version - computed: true, optional: false, required: true
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // warehouse_bucket_uri - computed: true, optional: false, required: true
  public get warehouseBucketUri() {
    return this.getStringAttribute('warehouse_bucket_uri');
  }
}
export interface DataOciDataflowApplicationsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDataflowApplications extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDataflowApplicationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataflow_applications',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._displayNameStartsWith = config.displayNameStartsWith;
    this._ownerPrincipalId = config.ownerPrincipalId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applications - computed: true, optional: false, required: true
  public applications(index: string) {
    return new DataOciDataflowApplicationsApplications(this, 'applications', index);
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // display_name_starts_with - computed: false, optional: true, required: false
  private _displayNameStartsWith?: string;
  public get displayNameStartsWith() {
    return this._displayNameStartsWith;
  }
  public set displayNameStartsWith(value: string | undefined) {
    this._displayNameStartsWith = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // owner_principal_id - computed: false, optional: true, required: false
  private _ownerPrincipalId?: string;
  public get ownerPrincipalId() {
    return this._ownerPrincipalId;
  }
  public set ownerPrincipalId(value: string | undefined) {
    this._ownerPrincipalId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDataflowApplicationsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDataflowApplicationsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      display_name_starts_with: this._displayNameStartsWith,
      owner_principal_id: this._ownerPrincipalId,
      filter: this._filter,
    };
  }
}
