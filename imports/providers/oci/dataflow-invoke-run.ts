// https://www.terraform.io/docs/providers/oci/r/dataflow_invoke_run.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "application_id": {
        "type": "string",
        "required": true
      },
      "archive_uri": {
        "type": "string",
        "computed": true
      },
      "arguments": {
        "type": [
          "list",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "asynchronous": {
        "type": "bool",
        "optional": true
      },
      "class_name": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "configuration": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "data_read_in_bytes": {
        "type": "string",
        "computed": true
      },
      "data_written_in_bytes": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "required": true
      },
      "driver_shape": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "executor_shape": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "file_uri": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "language": {
        "type": "string",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "logs_bucket_uri": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "num_executors": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "opc_request_id": {
        "type": "string",
        "computed": true
      },
      "owner_principal_id": {
        "type": "string",
        "computed": true
      },
      "owner_user_name": {
        "type": "string",
        "computed": true
      },
      "private_endpoint_dns_zones": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "private_endpoint_id": {
        "type": "string",
        "computed": true
      },
      "private_endpoint_max_host_count": {
        "type": "number",
        "computed": true
      },
      "private_endpoint_nsg_ids": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "private_endpoint_subnet_id": {
        "type": "string",
        "computed": true
      },
      "run_duration_in_milliseconds": {
        "type": "string",
        "computed": true
      },
      "spark_version": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
      },
      "total_ocpu": {
        "type": "number",
        "computed": true
      },
      "warehouse_bucket_uri": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "parameters": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "value": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataflowInvokeRunConfig extends TerraformMetaArguments {
  readonly applicationId: string;
  readonly arguments?: string[];
  readonly asynchronous?: boolean;
  readonly compartmentId: string;
  readonly configuration?: { [key: string]: string };
  readonly definedTags?: { [key: string]: string };
  readonly displayName: string;
  readonly driverShape?: string;
  readonly executorShape?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly logsBucketUri?: string;
  readonly numExecutors?: number;
  readonly warehouseBucketUri?: string;
  /** parameters block */
  readonly parameters?: DataflowInvokeRunParameters[];
  /** timeouts block */
  readonly timeouts?: DataflowInvokeRunTimeouts;
}
export interface DataflowInvokeRunParameters {
  readonly name: string;
  readonly value: string;
}
export interface DataflowInvokeRunTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DataflowInvokeRun extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataflowInvokeRunConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataflow_invoke_run',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationId = config.applicationId;
    this._arguments = config.arguments;
    this._asynchronous = config.asynchronous;
    this._compartmentId = config.compartmentId;
    this._configuration = config.configuration;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._driverShape = config.driverShape;
    this._executorShape = config.executorShape;
    this._freeformTags = config.freeformTags;
    this._logsBucketUri = config.logsBucketUri;
    this._numExecutors = config.numExecutors;
    this._warehouseBucketUri = config.warehouseBucketUri;
    this._parameters = config.parameters;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId: string;
  public get applicationId() {
    return this._applicationId;
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }

  // archive_uri - computed: true, optional: false, required: true
  public get archiveUri() {
    return this.getStringAttribute('archive_uri');
  }

  // arguments - computed: true, optional: true, required: false
  private _arguments?: string[];
  public get arguments() {
    return this._arguments ?? this.getListAttribute('arguments');
  }
  public set arguments(value: string[] | undefined) {
    this._arguments = value;
  }

  // asynchronous - computed: false, optional: true, required: false
  private _asynchronous?: boolean;
  public get asynchronous() {
    return this._asynchronous;
  }
  public set asynchronous(value: boolean | undefined) {
    this._asynchronous = value;
  }

  // class_name - computed: true, optional: false, required: true
  public get className() {
    return this.getStringAttribute('class_name');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: { [key: string]: string }
  public get configuration(): { [key: string]: string } | undefined {
    return this._configuration; // Getting the computed value is not yet implemented
  }
  public set configuration(value: { [key: string]: string } | undefined) {
    this._configuration = value;
  }

  // data_read_in_bytes - computed: true, optional: false, required: true
  public get dataReadInBytes() {
    return this.getStringAttribute('data_read_in_bytes');
  }

  // data_written_in_bytes - computed: true, optional: false, required: true
  public get dataWrittenInBytes() {
    return this.getStringAttribute('data_written_in_bytes');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // driver_shape - computed: true, optional: true, required: false
  private _driverShape?: string;
  public get driverShape() {
    return this._driverShape ?? this.getStringAttribute('driver_shape');
  }
  public set driverShape(value: string | undefined) {
    this._driverShape = value;
  }

  // executor_shape - computed: true, optional: true, required: false
  private _executorShape?: string;
  public get executorShape() {
    return this._executorShape ?? this.getStringAttribute('executor_shape');
  }
  public set executorShape(value: string | undefined) {
    this._executorShape = value;
  }

  // file_uri - computed: true, optional: false, required: true
  public get fileUri() {
    return this.getStringAttribute('file_uri');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // language - computed: true, optional: false, required: true
  public get language() {
    return this.getStringAttribute('language');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // logs_bucket_uri - computed: true, optional: true, required: false
  private _logsBucketUri?: string;
  public get logsBucketUri() {
    return this._logsBucketUri ?? this.getStringAttribute('logs_bucket_uri');
  }
  public set logsBucketUri(value: string | undefined) {
    this._logsBucketUri = value;
  }

  // num_executors - computed: true, optional: true, required: false
  private _numExecutors?: number;
  public get numExecutors() {
    return this._numExecutors ?? this.getNumberAttribute('num_executors');
  }
  public set numExecutors(value: number | undefined) {
    this._numExecutors = value;
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

  // warehouse_bucket_uri - computed: true, optional: true, required: false
  private _warehouseBucketUri?: string;
  public get warehouseBucketUri() {
    return this._warehouseBucketUri ?? this.getStringAttribute('warehouse_bucket_uri');
  }
  public set warehouseBucketUri(value: string | undefined) {
    this._warehouseBucketUri = value;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: DataflowInvokeRunParameters[];
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: DataflowInvokeRunParameters[] | undefined) {
    this._parameters = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataflowInvokeRunTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataflowInvokeRunTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: this._applicationId,
      arguments: this._arguments,
      asynchronous: this._asynchronous,
      compartment_id: this._compartmentId,
      configuration: this._configuration,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      driver_shape: this._driverShape,
      executor_shape: this._executorShape,
      freeform_tags: this._freeformTags,
      logs_bucket_uri: this._logsBucketUri,
      num_executors: this._numExecutors,
      warehouse_bucket_uri: this._warehouseBucketUri,
      parameters: this._parameters,
      timeouts: this._timeouts,
    };
  }
}
