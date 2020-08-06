// https://www.terraform.io/docs/providers/oci/r/data_oci_dataflow_invoke_runs.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "application_id": {
        "type": "string",
        "optional": true
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
      },
      "runs": {
        "type": [
          "list",
          [
            "object",
            {
              "application_id": "string",
              "archive_uri": "string",
              "arguments": [
                "list",
                "string"
              ],
              "asynchronous": "bool",
              "class_name": "string",
              "compartment_id": "string",
              "configuration": [
                "map",
                "string"
              ],
              "data_read_in_bytes": "string",
              "data_written_in_bytes": "string",
              "defined_tags": [
                "map",
                "string"
              ],
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
              "lifecycle_details": "string",
              "logs_bucket_uri": "string",
              "num_executors": "number",
              "opc_request_id": "string",
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
              "private_endpoint_dns_zones": [
                "list",
                "string"
              ],
              "private_endpoint_id": "string",
              "private_endpoint_max_host_count": "number",
              "private_endpoint_nsg_ids": [
                "list",
                "string"
              ],
              "private_endpoint_subnet_id": "string",
              "run_duration_in_milliseconds": "string",
              "spark_version": "string",
              "state": "string",
              "time_created": "string",
              "time_updated": "string",
              "total_ocpu": "number",
              "warehouse_bucket_uri": "string"
            }
          ]
        ],
        "computed": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "time_created_greater_than": {
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

export interface DataOciDataflowInvokeRunsConfig extends TerraformMetaArguments {
  readonly applicationId?: string;
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly displayNameStartsWith?: string;
  readonly ownerPrincipalId?: string;
  readonly state?: string;
  readonly timeCreatedGreaterThan?: string;
  /** filter block */
  readonly filter?: DataOciDataflowInvokeRunsFilter[];
}
export class DataOciDataflowInvokeRunsRunsParameters extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataOciDataflowInvokeRunsRuns extends ComplexComputedList {

  // application_id - computed: true, optional: false, required: true
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // archive_uri - computed: true, optional: false, required: true
  public get archiveUri() {
    return this.getStringAttribute('archive_uri');
  }

  // arguments - computed: true, optional: false, required: true
  public get arguments() {
    return this.getListAttribute('arguments');
  }

  // asynchronous - computed: true, optional: false, required: true
  public get asynchronous() {
    return this.getBooleanAttribute('asynchronous');
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

  // data_read_in_bytes - computed: true, optional: false, required: true
  public get dataReadInBytes() {
    return this.getStringAttribute('data_read_in_bytes');
  }

  // data_written_in_bytes - computed: true, optional: false, required: true
  public get dataWrittenInBytes() {
    return this.getStringAttribute('data_written_in_bytes');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
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

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // logs_bucket_uri - computed: true, optional: false, required: true
  public get logsBucketUri() {
    return this.getStringAttribute('logs_bucket_uri');
  }

  // num_executors - computed: true, optional: false, required: true
  public get numExecutors() {
    return this.getNumberAttribute('num_executors');
  }

  // opc_request_id - computed: true, optional: false, required: true
  public get opcRequestId() {
    return this.getStringAttribute('opc_request_id');
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

  // private_endpoint_dns_zones - computed: true, optional: false, required: true
  public get privateEndpointDnsZones() {
    return this.getListAttribute('private_endpoint_dns_zones');
  }

  // private_endpoint_id - computed: true, optional: false, required: true
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }

  // private_endpoint_max_host_count - computed: true, optional: false, required: true
  public get privateEndpointMaxHostCount() {
    return this.getNumberAttribute('private_endpoint_max_host_count');
  }

  // private_endpoint_nsg_ids - computed: true, optional: false, required: true
  public get privateEndpointNsgIds() {
    return this.getListAttribute('private_endpoint_nsg_ids');
  }

  // private_endpoint_subnet_id - computed: true, optional: false, required: true
  public get privateEndpointSubnetId() {
    return this.getStringAttribute('private_endpoint_subnet_id');
  }

  // run_duration_in_milliseconds - computed: true, optional: false, required: true
  public get runDurationInMilliseconds() {
    return this.getStringAttribute('run_duration_in_milliseconds');
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

  // total_ocpu - computed: true, optional: false, required: true
  public get totalOcpu() {
    return this.getNumberAttribute('total_ocpu');
  }

  // warehouse_bucket_uri - computed: true, optional: false, required: true
  public get warehouseBucketUri() {
    return this.getStringAttribute('warehouse_bucket_uri');
  }
}
export interface DataOciDataflowInvokeRunsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDataflowInvokeRuns extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDataflowInvokeRunsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataflow_invoke_runs',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationId = config.applicationId;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._displayNameStartsWith = config.displayNameStartsWith;
    this._ownerPrincipalId = config.ownerPrincipalId;
    this._state = config.state;
    this._timeCreatedGreaterThan = config.timeCreatedGreaterThan;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string;
  public get applicationId() {
    return this._applicationId;
  }
  public set applicationId(value: string | undefined) {
    this._applicationId = value;
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

  // runs - computed: true, optional: false, required: true
  public runs(index: string) {
    return new DataOciDataflowInvokeRunsRuns(this, 'runs', index);
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // time_created_greater_than - computed: false, optional: true, required: false
  private _timeCreatedGreaterThan?: string;
  public get timeCreatedGreaterThan() {
    return this._timeCreatedGreaterThan;
  }
  public set timeCreatedGreaterThan(value: string | undefined) {
    this._timeCreatedGreaterThan = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDataflowInvokeRunsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDataflowInvokeRunsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: this._applicationId,
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      display_name_starts_with: this._displayNameStartsWith,
      owner_principal_id: this._ownerPrincipalId,
      state: this._state,
      time_created_greater_than: this._timeCreatedGreaterThan,
      filter: this._filter,
    };
  }
}
